'use client';

import qs from 'query-string';
import { ChangeEventHandler, useEffect, useState } from "react";
import { Search } from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";


export const SearchInput = () => {
    // agregar hook para buscar
    const router = useRouter();
    const searchParams = useSearchParams();

    // obtener el id de las categorias desde la URL
    // esta busqueda se realiza con las categorias en forma de boton
    const categoryId = searchParams.get('categoryId');

    // utilizar name desde el hook useState
    const name = searchParams.get('name');
    const [value, setValue] = useState(name || '');

    // debo evitar que la base de datos consuma muchos recursos valiosos
    // por lo que debo utilizar un hook para evitar que se hagan muchas peticiones
    // a la base de datos (debounce), para ello utilizo el hook useDebounce
    // solo se ejecuta cunado el usuario termina de escribir
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    }

    // crear el useEffect para que se ejecute cuando el usuario termine de escribir
    useEffect(() => {
        const query = {
            name: debouncedValue || undefined, 
            categoryId: categoryId || undefined
        };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query: query,
        }, { skipEmptyString: true, skipNull: true }); // para que no se muestre el query vacio

        router.push(url);
    }, [debouncedValue, categoryId, router]);


    return (
         <div className="relative ">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
            <Input
                onChange={onChange}
                value={value}
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
         </div>
    );
}