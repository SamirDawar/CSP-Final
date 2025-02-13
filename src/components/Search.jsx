import React, { useState } from "react";
import { Grid2, Button } from "@mui/material";
import B from '../ASL/A.png'
import A from '../ASL/B.png'
import C from '../ASL/C.png'
import D from '../ASL/D.png'
import E from '../ASL/E.png'
import F from '../ASL/F.png'
import G from '../ASL/G.png'
import H from '../ASL/H.png'
import I from '../ASL/I.png'
import J from '../ASL/J.png'
import K from '../ASL/K.png'
import L from '../ASL/L.png'
import M from '../ASL/M.png'
import N from '../ASL/N.png'
import O from '../ASL/O.png'
import P from '../ASL/P.png'
import Q from '../ASL/Q.png'
import R from '../ASL/R.png'
import S from '../ASL/S.png'
import T from '../ASL/T.png'
import U from '../ASL/U.png'
import V from '../ASL/V.png'
import W from '../ASL/W.png'
import X from '../ASL/X.png'
import Y from '../ASL/Y.png'
import Z from '../ASL/Z.png'




export default function Search() {

    let images = { "A":A, "B":B, "C":C, "D":D, "E":E, "F":F, "G":G, "H":H, "I":I, "J":J, "K":K, "L":L, "M":M, "N":N, "O":O, "P":P, "Q":Q,
            "R":R, "S":S, "T":T, "U":U, "V":V, "W":W, "X":X, "Y":Y, "Z":Z}

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
                        Show Alphabets
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    );
}
