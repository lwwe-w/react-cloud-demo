import React, { useState, useEffect } from "react";
import { InputItem, Toast, WingBlank, WhiteSpace, Button } from "antd-mobile";
import "./index.less";
import { login } from "@/api/user";

const Login: React.FC = () => {
  let [phone, setPhone] = useState();
  let [password, setPassword] = useState();
  let [phvalid, setPhValid] = useState(false);
  let [pavalid, setPaValid] = useState(false);
  let [disabled, setDisabled] = useState(true);

  useEffect(() => {}, []);

  function onPhChange(val: string) {
    if (val.replace(/\s/g, "").length < 11) {
      setPhValid(true);
      setDisabled(true);
    } else {
      setPhValid(false);
      if (!pavalid) setDisabled(false);
    }
    setPhone(val);
  }
  function onPaChange(val: string) {
    if (val.replace(/\s/g, "").length < 6) {
      setPaValid(true);
      setDisabled(true);
    } else {
      setPaValid(false);
      if (!phvalid) setDisabled(false);
    }
    setPassword(val);
  }
  async function submit() {
    let ph = "";
    phone.split("").reduce((prev: string, next: string) => {
      if (Number(next) || next === "0") ph += next;
      return ph;
    }, "");
    const userInfo = {
      phone: ph,
      password
    };
    let result = await login(userInfo);
    console.log(result);
  }
  return (
    <div className="login-wrapper">
      <WingBlank>
        <InputItem
          type="phone"
          placeholder="请输入手机号"
          error={phvalid}
          onErrorClick={() => {
            if (!phvalid) Toast.info("请输入正确的手机号");
          }}
          onChange={onPhChange}
          value={phone}
          className="input-item"
        />
        <WhiteSpace />
        <InputItem
          type="password"
          placeholder="请输入密码"
          error={pavalid}
          onErrorClick={() => {
            if (!pavalid) Toast.info("请输入正确的密码");
          }}
          onChange={onPaChange}
          value={password}
          className="input-item"
        />
        <WhiteSpace />
        <Button
          type="primary"
          onClick={submit}
          className="button"
          disabled={disabled}
        >
          提交
        </Button>
        <WhiteSpace />
      </WingBlank>
    </div>
  );
};

export default Login;
