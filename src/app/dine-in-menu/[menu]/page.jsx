"use client";
import { useParams } from "next/navigation";

export default function DineInMenuCategory() {
    const params = useParams();
    return (
        <>
            <h1>Dine In Menu</h1>
            <h3>{params.menu}</h3>
        </>
    );
}
