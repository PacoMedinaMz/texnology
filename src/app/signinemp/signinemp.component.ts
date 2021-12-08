import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinemp',
  templateUrl: './signinemp.component.html',
  styleUrls: ['./signinemp.component.scss'],
})
export class SigninempComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    correo: '',
    password: '',
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const { correo, password } = this.checkoutForm.value;
    console.warn(correo, password);

    fetch('http://localhost:20404/empleado/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ correo: correo, password: password }),
    })
      .then((data) => data.json())
      .then((resp) => {
        if (resp._id) {
          alert('Bienvenido ' + resp.Nombre);
          this.router.navigate(['home']);
        } else if (resp.error) {
          alert(resp.error);
        } else {
          alert('Hubo un error al ejecutar la petción.');
        }
      })
      .catch((err) => console.log(err));

    return false;
  }
}
