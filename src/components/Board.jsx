// src/components/Board.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Board.css';

const Board = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="board">
            <h1>Fetched Data</h1>
            <div className="dropdown">
                <button className="dropdown-toggle">Menu</button>
                <ul className="dropdown-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Board;
