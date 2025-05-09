import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
                <CardContent>
                    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                    <Input 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="mb-4"
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="mb-4"
                    />
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <Button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">Login</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
