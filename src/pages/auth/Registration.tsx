import React, { useState } from "react";
import axios from 'axios';

const Registration: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerStudent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      passwordRepeat: formData.get('passwordRepeat') as string,
      group_id: parseInt(formData.get('group_id') as string)
    };
    try {
      const response = await axios.post('https://closing-elk-willingly.ngrok-free.app/api/auth/register/student/', userData);
      console.log('Response:', response.data);
      setIsRegistered(true);
    } catch (error) {
      console.error('Error:', error);
      setError('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div>
      <h2>Создайте профиль</h2>
      <form onSubmit={registerStudent}>
        <div>
          <label htmlFor="firstname">Имя:</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div>
          <label htmlFor="lastname">Фамилия:</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label htmlFor="passwordRepeat">Подтверждение пароля:</label>
          <input type="password" id="passwordRepeat" name="passwordRepeat" required />
        </div>
        <div>
          <label htmlFor="group_id">ID группы:</label>
          <input type="number" id="group_id" name="group_id" required />
        </div>
        <button type="submit">Создать</button>
      </form>
      {error && <p>{error}</p>}
      {isRegistered && <p>Вы успешно зарегистрированы!</p>}
    </div>
  );
};

export default Registration;


//qwerty
//Abc12345678.