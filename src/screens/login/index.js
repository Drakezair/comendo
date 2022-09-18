import { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import { Button, InputText } from "../../share/components";
import styles from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "../../contexts";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const { login } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.login_container}>
      <View>
        <Image source={require("../../../assets/logo.png")} />
      </View>
      <View style={styles.login_form}>
        <InputText
          control={control}
          name="email"
          error={errors?.email?.message}
          style={styles.input}
          placeholder={"Correo electronico"}
        />
        <InputText
          control={control}
          name="password"
          style={styles.input}
          hidden={showPassword}
          placeholder={"Contraseña"}
          error={errors?.password?.message}
          rightIcon={{
            name: showPassword ? "eye" : "eye-slash",
            action: handleShowPassword,
          }}
        />
        <Button
          text={"¿Has olvidado tu contraseña?"}
          variant="only_text"
          style={styles.button}
        />
        <Button
          onPress={handleSubmit(login)}
          text={"Iniciar sesión"}
          style={styles.button}
        />
        <Button text={"Registrate"} variant="secondary" style={styles.button} />
      </View>
    </View>
  );
}
