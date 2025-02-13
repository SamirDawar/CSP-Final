import React, { useState } from "react";
import '../App.css';
import { Grid2, Button } from "@mui/material";

export default function Search() {
    const [search, setSearch] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="searchBar">
            <input 
                placeholder="Enter your word..."
                className="SearchBarInput"
                value={search}
                onChange={handleSearch}
            />
            <Grid2 container spacing={2} justifyContent="center" className="buttonGrid">
                <Grid2 item>
                    <Button variant="contained" style={{ margin: '0 10px' }}>
                        Convert to ASL
                    </Button>
                </Grid2>
                <Grid2 item>
                    <Button 
                        variant="contained" 
                        style={{ margin: '0 10px' }}>
                        Another Action
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    );
}
