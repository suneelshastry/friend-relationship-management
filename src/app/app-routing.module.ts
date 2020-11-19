import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'friends',
        loadChildren: () => import('./friend-archive/friend-archive.module')
            .then(m => m.FriendArchiveModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/friends'
    }
    // TODO add 404 related routes

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
        }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
