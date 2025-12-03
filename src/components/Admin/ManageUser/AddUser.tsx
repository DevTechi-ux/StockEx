import { useState } from 'react';
import SetMarginExposure from './SetMarginExposure';

type NewUserType = {
    fullName: string;
    email: string;
    userName: string;
    mobileNo: string;
    selectCompany: string;
    role: string;
    password: string;
    confirmPassword: string;
    deliveryPledge: string;
    userActive: string;
    profileImage: File | null;
};

interface AddUserProps {
    onBack: () => void;
    onSave: () => void;
}

export default function AddUser({ onBack, onSave }: AddUserProps) {
    const [currentStep, setCurrentStep] = useState<'addUser' | 'setMargin'>('addUser');
    const [newUser, setNewUser] = useState<NewUserType>({
        fullName: '',
        email: '',
        userName: '',
        mobileNo: '',
        selectCompany: '',
        role: '',
        password: '',
        confirmPassword: '',
        deliveryPledge: '50',
        userActive: 'Yes',
        profileImage: null,
    });

    const handleSaveUser = () => {
        if (!newUser.role) {
            alert('Please select a role first');
            return;
        }
        // Move to margin exposure setup
        setCurrentStep('setMargin');
    };



    if (currentStep === 'setMargin') {
        return (
            <SetMarginExposure
                onBack={() => setCurrentStep('addUser')}
                onSave={(marginData) => {
                    console.log('User data:', newUser);
                    console.log('Margin data:', marginData);
                    onSave();
                    setNewUser({
                        fullName: '',
                        email: '',
                        userName: '',
                        mobileNo: '',
                        selectCompany: '',
                        role: '',
                        password: '',
                        confirmPassword: '',
                        deliveryPledge: '50',
                        userActive: 'Yes',
                        profileImage: null,
                    });
                    setCurrentStep('addUser');
                }}
            />
        );
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-8">Add User</h1>

            <div className="bg-white p-8 rounded">
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                value={newUser.fullName}
                                onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Select Company</label>
                            <select
                                value={newUser.selectCompany}
                                onChange={(e) => setNewUser({ ...newUser, selectCompany: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="">Select The Company</option>
                                <option value="uat">UAT Stockex</option>
                                <option value="live">Live Stockex</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Roles</label>
                            <select
                                value={newUser.role}
                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="">Select the Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="broker">Broker</option>
                                <option value="subBroker">Sub Broker</option>
                                <option value="fundManager">Fund Manager</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={newUser.confirmPassword}
                                onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Profile Image</label>
                            <div className="flex gap-4 items-center">
                                <input
                                    type="file"
                                    onChange={(e) => setNewUser({ ...newUser, profileImage: e.target.files?.[0] || null })}
                                    className="px-4 py-2 border border-gray-300 rounded"
                                />
                                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                    {newUser.profileImage ? '📷' : '📷'}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">User Name</label>
                            <input
                                type="text"
                                value={newUser.userName}
                                onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Mobile No</label>
                            <input
                                type="tel"
                                value={newUser.mobileNo}
                                onChange={(e) => setNewUser({ ...newUser, mobileNo: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Delivery Pledge</label>
                            <input
                                type="number"
                                value={newUser.deliveryPledge}
                                onChange={(e) => setNewUser({ ...newUser, deliveryPledge: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">User Active</label>
                            <select
                                value={newUser.userActive}
                                onChange={(e) => setNewUser({ ...newUser, userActive: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4 mt-8">
                    <button
                        onClick={onBack}
                        className="px-6 py-2 bg-gray-600 text-white rounded font-semibold hover:bg-gray-700"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSaveUser}
                        className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
