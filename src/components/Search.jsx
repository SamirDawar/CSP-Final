import React, { useState } from "react";
import { Grid2, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import B from '../ASL/A.png';
import A from '../ASL/B.png';
import C from '../ASL/C.png';
import D from '../ASL/D.png';
import E from '../ASL/E.png';
import F from '../ASL/F.png';
import G from '../ASL/G.png';
import H from '../ASL/H.png';
import I from '../ASL/I.png';
import J from '../ASL/J.png';
import K from '../ASL/K.png';
import L from '../ASL/L.png';
import M from '../ASL/M.png';
import N from '../ASL/N.png';
import O from '../ASL/O.png';
import P from '../ASL/P.png';
import Q from '../ASL/Q.png';
import R from '../ASL/R.png';
import S from '../ASL/S.png';
import T from '../ASL/T.png';
import U from '../ASL/U.png';
import V from '../ASL/V.png';
import W from '../ASL/W.png';
import X from '../ASL/X.png';
import Y from '../ASL/Y.png';
import Z from '../ASL/Z.png';
import Signs from './Signs';

export default function Search() {
    const images = { "A": A, "B": B, "C": C, "D": D, "E": E, "F": F, "G": G, "H": H, "I": I, "J": J, "K": K, "L": L, "M": M, "N": N, "O": O, "P": P, "Q": Q,
        "R": R, "S": S, "T": T, "U": U, "V": V, "W": W, "X": X, "Y": Y, "Z": Z };

    const [search, setSearch] = useState('');
    const [aslImages, setAslImages] = useState([]);
    const [open, setOpen] = useState(false);

    function handleSearch(e) {
        setSearch(e.target.value.toUpperCase());
    }

    function convertToASL() {
        const imageArray = Array.from(search).map(letter => images[letter]).filter(image => image);
        setAslImages(imageArray);
    }

    function clearImages() {
        setAslImages([]);
        setSearch('');
    }

    function showAlphabet() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
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
                    <Button variant="contained" style={{ margin: '0 10px' }} onClick={convertToASL}>
                        Convert to ASL
                    </Button>
                </Grid2>
                <Grid2 item>
                    <Button variant="contained" style={{ margin: '0 10px' }} onClick={showAlphabet}>
                        Show Alphabet
                    </Button>
                </Grid2>
                <Grid2 item>
                    <Button variant="contained" onClick={clearImages}>
                        Clear
                    </Button>
                </Grid2>
            </Grid2>
            <Signs images={aslImages} />


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ASL Alphabet</DialogTitle>
                <DialogContent>
                    <Grid2 container spacing={2} justifyContent="center">
                        {Object.entries(images).map(([letter, image]) => (
                            <Grid2 item key={letter}>
                                <img src={image} alt={`ASL ${letter}`} style={{ width: '50px', height: '50px' }} />
                                <p>{letter}</p>
                            </Grid2>
                        ))}
                    </Grid2>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
