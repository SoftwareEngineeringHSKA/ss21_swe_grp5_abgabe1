/*
 *
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Das Modul besteht aus dem JSON-Array mit den vorhandenen Benutzerkennungen
 * vom Typ {@linkcode User}.
 * @packageDocumentation
 */

import type { User } from './user.service';
import dotenv from 'dotenv';

dotenv.config();
const password = '$2b$10$YTg4.iW.FPRqHExVLRf05Ob/z/BQqjUxJgncct2TgxGBjl4cCUNGS';

/**
 * Ein JSON-Array der Benutzerdaten mit den vorhandenen Rollen.
 * Nicht Set, weil es dafür keine Suchfunktion gibt.
 */
export const users: User[] = [
    {
        id: '20000000-0000-0000-0000-000000000001',
        username: 'admin',
        password,
        email: 'admin@acme.com',
        roles: ['admin', 'mitarbeiter', 'premiumkunde', 'kunde'],
    },
    {
        id: '20000000-0000-0000-0000-000000000002',
        username: 'tim.mueller',
        password,
        email: 'tim.mueller@acme.com',
        roles: ['admin', 'mitarbeiter', 'kunde'],
    },
    {
        id: '20000000-0000-0000-0000-000000000003',
        username: 'peter.schmidt',
        password,
        email: 'peter.schmidt@acme.com',
        roles: ['mitarbeiter', 'kunde'],
    },
    {
        id: '20000000-0000-0000-0000-000000000004',
        username: 'anna.schneider',
        password,
        email: 'anna.schneider@acme.com',
        roles: ['mitarbeiter', 'kunde'],
    },
    {
        id: '20000000-0000-0000-0000-000000000005',
        username: 'martha.meister',
        password,
        email: 'martha.meister@acme.com',
        roles: ['kunde'],
    },
    {
        id: '20000000-0000-0000-0000-000000000006',
        username: 'georg.graf',
        password,
        email: 'georg.graf@acme.com',
    },
];
