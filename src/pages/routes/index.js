import Login from '../Login';
import ForgetPassword from '../ForgetPassword';
import LoginLayout from '../../Layout/LoginLayout';
import ManagementLayout from '../../Layout/ManagementLayout';
// export const publicRoutes = [
//     { path: '/', component: Home },
//     { path: '/following', component: Following },
//     { path: '/profile', component: Profile, Layout: HeaderLayout },
// ];
export const privateRoutes = [
    { path: '/login', component: Login, Layout: LoginLayout },
    { path: '/forgetpassword', component: ForgetPassword, Layout: LoginLayout },
    { path: '/', component: ForgetPassword, Layout: ManagementLayout },
];
