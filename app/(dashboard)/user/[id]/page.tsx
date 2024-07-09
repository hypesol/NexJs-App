"use client"
import { useSearchParams, useParams } from 'next/navigation';

export default function Page({ params }: { params: { slug: string } }) {
    const paramss = useParams();
    const searchParams = useSearchParams();
    const age = searchParams.get('age');

    console.log('Params:', params);
    console.log('Age:', age);


    return <div>My Post:  {params.id}</div>
}