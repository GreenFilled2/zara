'use client';

import Link from 'next/link';
import { SubCategories } from '../util/categories'

interface SubCategoryProps {
    subCat: string;
}

export default function SubCategory({ subCat }: SubCategoryProps) {
    const subCats = SubCategories(subCat)

    console.log(subCats)
    return (
        <ul className=''>
            {subCats.map((e, i) => (
                <li key={i}><Link href={`/products/${subCat}/${e}`}>{e}</Link></li>
            ))}
        </ul>
    );
}