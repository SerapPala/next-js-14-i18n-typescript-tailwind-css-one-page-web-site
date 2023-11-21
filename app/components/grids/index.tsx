// 'use client'
import React from "react";
import Grid1 from "@/app/components/grids/grid1";
import { StaticImageData } from 'next/image';

const Index = () => {
    // Sample data for demonstration
    const sampleItem = {
        id: 1,
        image: {} as StaticImageData, // Replace this with your actual image
        title: "Sample Title",
        description: "Sample Description",
        fav: 10,
        date: "2023-01-01",
        comment: 5,
    };

    return (
        <React.Fragment>
            <Grid1 item={sampleItem} />
        </React.Fragment>
    );
};

export default Index;
