import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected rows = [
    { name: 'Jordan Cole', role: 'Admin', email: 'jordan@orbital.com', initials: 'JC' },
    { name: 'Priya Nair', role: 'Product Manager', email: 'priya@orbital.com', initials: 'PN' },
    { name: 'Marcus Lee', role: 'Engineer', email: 'marcus@orbital.com', initials: 'ML' },
    { name: 'Elena Frost', role: 'Designer', email: 'elena@orbital.com', initials: 'EF' },
    { name: 'Sam Okafor', role: 'Engineer', email: 'sam@orbital.com', initials: 'SO' },
    { name: 'Tara Singh', role: 'Support Lead', email: 'tara@orbital.com', initials: 'TS' },
  ];
}
