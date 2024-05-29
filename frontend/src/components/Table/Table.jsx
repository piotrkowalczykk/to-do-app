import React, { useEffect, useState } from "react";
import styles from "./Table.module.css";
import { BinIcon } from "../../ui/icons/bin";

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

    const handleDeleteBtn = (id) => {
        fetch(`http://127.0.0.1:8080/api/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            window.location.reload()
            if (!response.ok) {
                console.log('Network response was not ok');
            } else {
                const updatedRecords = [...records];
                updatedRecords.splice(index, 1);
                setRecords(updatedRecords);
            }
        })
        .catch(error => {
            console.error(error);
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
                        <th>Delete</th>
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
                            <td className={record.type == "Priority" ? styles.typePriority :
                             record.type == "Important" ? styles.typeImportant :
                             record.type == "Secondary" ? styles.typeSecondary : styles.typeDoLater}>{record.type}</td>
                            <td>{<button className={styles.bin} onClick={() => handleDeleteBtn(record.id, index)}><BinIcon /></button>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
