import React from 'react';
import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageCategories from './manage_categories';

const ManageGroups = () => {
    return (
        <UserLayout>
            <ManageBrands/>
            <ManageCategories/>
        </UserLayout>
    );
};

export default ManageGroups;