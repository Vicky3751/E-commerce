import axios from 'axios';

// Register a new user
const handleRegister = async (userData) => {
    try {
        const { data } = await axios.post('/users', userData);
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        throw error;
    }
};

// Login a user
const handleLogin = async (email, password) => {
    try {
        const { data } = await axios.post('/users/login', { email, password });
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        throw error;
    }
};

// Get a single user
const handleGetUser = async (userId) => {
    try {
        const { data } = await axios.get(`/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

// Get all users
const handleGetUsers = async () => {
    try {
        const { data } = await axios.get('/users', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

// Update a user
const handleUpdateUser = async (userId, updates) => {
    try {
        const { data } = await axios.patch(`/users/${userId}`, updates, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

// Delete a user
const handleDeleteUser = async (userId) => {
    try {
        await axios.delete(`/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    } catch (error) {
        throw error;
    }
};

