import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {

    const res = await fetch('https://ph-conseptual-session-08-next-js-pr.vercel.app/category.json');
    const data = await res.json();

    console.log(data);
    return (
        <div className="mb-5 flex gap-1">
            {
                data.map(category => <Link  key={category.id} href={`?category=${category.name.toLowerCase()}`}><Button variant="outline" size="sm">{category.name}</Button></Link>)
            }
        </div>
    );
};

export default Category;