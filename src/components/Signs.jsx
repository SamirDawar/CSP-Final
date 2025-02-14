import React from "react";
import { Grid2 } from "@mui/material";

export default function Signs({ images }) {
    return (
        <Grid2 container spacing={2} justifyContent="center">
            {images.map((image, index) => (
                <Grid2 item key={index}>
                    <img src={image} alt={`ASL letter`} style={{ width: '100px', height: '100px' }} />
                </Grid2>
            ))}
        </Grid2>
    );
}
