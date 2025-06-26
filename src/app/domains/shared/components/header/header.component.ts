import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { environment } from '../../../../../envirements/envirements';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   login() {
    const clientId = environment.clientId;
    const redirectUri = encodeURIComponent(environment.redirectUri);
    const domain = environment.cognitoDomain;
    const responseType = 'code';
    const scope = encodeURIComponent('email openid phone');
    const url = `https://${domain}/login?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    
    //console.log('Cognito url:',url);
    window.location.href = url;
  }
}
