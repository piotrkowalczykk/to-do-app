import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";

function Table() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8080/api/tasks")
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.error('Error fetching tasks:', err));
    }, []);

    const handleCheckboxChange = (index) => {
        const updatedRecords = [...records];
        const updatedStatus = !updatedRecords[index].status;
        updatedRecords[index].status = updatedStatus;
        setRecords(updatedRecords);

        fetch(`http://127.0.0.1:8080/api/tasks/${updatedRecords[index].id}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStatus),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Successfully updated status:', data);
        })
        .catch(error => {
            console.error('There was a problem with the update operation:', error);
        });
    };

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={record.status}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </td>
                            <td>{record.description}</td>
                            <td>{record.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
