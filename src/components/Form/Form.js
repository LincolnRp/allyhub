import React, { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { Button, Input, InputGroup, Stack, Select } from "@chakra-ui/react";
import { H1, DivContainerForm, DivForm, TextLabel } from "./style";
import InputMask from "react-input-mask";
import { GlobalContext } from "../../global/GlobalContext";
import swal from "sweetalert";

function Form() {
  const values = useContext(GlobalContext);

  const [form, onChange, cleanFields] = useForm({
    name: "",
    email: "",
    cpf: "",
    telephone: "",
    country: "",
    city: ""
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    cleanFields()
    return swal({
      title: "Cadastrado",
      text: `Legal, você cadastrou seu local de interesse, continue cadastrando novos locais !`,
      icon: "success",
    });

  };

  console.log(values.cities);

  return (
    <form onSubmit={onSubmitForm} id="form">
      <DivContainerForm>
        <H1>Cadastrar Destino</H1>
        <DivForm>
          <Input
            w={"400px"}
            placeholder="Nome"
            value={form.name}
            type={"text"}
            name="name"
            required
            onChange={onChange}
            h={"8vh"}
            marginBlock={"1vh"}
          ></Input>

          <Input
            w={"400px"}
            placeholder="Email"
            value={form.email}
            pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
            title="Digite um email no formato: email@dominio.com"
            type={"text"}
            name="email"
            required
            onChange={onChange}
            h={"8vh"}
            marginBlock={"1vh"}
          ></Input>

          <Input
            w={"400px"}
            placeholder="CPF"
            value={form.cpf}
            id="input"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            title="Digite um CPF no formato: xxx.xxx.xxx-xx"
            as={InputMask}
            mask="***.***.***-**"
            maskChar={null}
            type={"text"}
            name="cpf"
            required
            onChange={onChange}
            h={"8vh"}
            marginBlock={"1vh"}
          ></Input>

          <Input
            w={"400px"}
            placeholder="(99) 9999-9999"
            value={form.telephone}
            type={"text"}
            name="telephone"
            as={InputMask}
            mask="(**)****-****"
            maskChar={null}
            required
            onChange={onChange}
            h={"8vh"}
            marginBlock={"1vh"}
          ></Input>
          <div>
            <TextLabel>País</TextLabel>
            <Select
              w={"400px"}
              placeholder="Selecione"
              value={form.country}
              onChange={onChange}
              name="country"
            >
              {values.country.map((country) => {
                return (
                  <option value={country.code}>{country.name_ptbr}</option>
                );
              })}
            </Select>
          </div>
          <div>
            <TextLabel>Cidade</TextLabel>
            <Select
              w={"400px"}
              placeholder="Selecione"
              value={form.city}
              onChange={onChange}
              name="city"
            >
              {form.country ? (
                values.cities.map((cities) => {
                  if(form.country === cities.country_code & cities.name_ptbr != null)
                   {
                    return (
                      <option value={cities.country_code}>
                        {cities.name_ptbr}
                      </option>
                    );
                  }
                })
              ) : (
                <></>
              )}
            </Select>
          </div>

          <button type="submit">Cadastrar</button>
        </DivForm>
      </DivContainerForm>
    </form>
  );
}

export default Form;
