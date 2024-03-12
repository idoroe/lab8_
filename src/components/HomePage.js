import React from "react";

// Using JSON for styling
const styles = {
    container: {
        padding: '10px 1vw'
    },
    table: {
        marginLeft: '2vw',
        width: '96%', // Adjusted for better layout; previously was '100px'
        borderCollapse: 'collapse',
    },
    th: {
        borderBottom: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    },
    td: { // Added the missing styles for `td`
        borderBottom: '1px solid #ddd', // Ensures consistency with `th` styling
        padding: '8px',
        textAlign: 'left',
    }
};

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h2>Welcome to our Project</h2>
            <p>This project is designed to showcase our abilities to work with React, including state management, routing, and interacting with an API.</p>

            <h3>Creators:</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>Elias Poitras-Whitecalf</td>
                        <td style={styles.td}>Developer</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Emmanuel Idoro</td>
                        <td style={styles.td}>Developer</td>
                    </tr>
                    <tr>
                        <td style={styles.td}>Moyo Ogunjobi</td>
                        <td style={styles.td}>Developer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
