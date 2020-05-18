import React, { useState, useContext, useEffect } from 'react';
import { TodoContext } from '../../context/TodoState';
import './Toast.css';

export const Toast = () => {
    const [toastType, setToastType] = useState('');
    const { toast, clearToast } = useContext(TodoContext);

    useEffect(() => {
        notificationColor();
        if (toast.isShown) setTimeout(() => clearToast(), 3000);
    }, [toast]);

    const notificationColor = () => {
        switch (toast.action) {
            case 'add':
                return setToastType('is-primary');
            case 'delete':
                return setToastType('is-warning');
            case 'error':
                return setToastType('is-danger');
            default:
                return setToastType('is-primary');
        }
    }

    const clear = () => clearToast();

    return (
        <React.Fragment>
            {toast.isShown ? 
                <div className={`notification ${toastType}`}>
                    <strong>{toast.message}</strong>
                    <button className="delete" onClick={() => clear()}></button>
                </div>
            : null}
        </React.Fragment>
    )
}
