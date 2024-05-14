import './personal-area-edit-password.scss';
import { Button, Form, Input } from 'antd';
import type { FormItemProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';

export function PersonalAreaPassword() {
  return (
    <div className="personal-area-password">
      <h3 className="personal-area-password__title">Смена пароля</h3>
      <Form name="form_item_path" layout="vertical" className="personal-area-password__form">
        <FormItem  label="Введите старый пароль:" name="oldPassword">
          <Input></Input>
        </FormItem>
        <FormItem  label="Введите новый пароль:" name="newPassword">
          <Input></Input>
        </FormItem>
      <Button type="primary" htmlType="submit">
        сохранить
      </Button>
    </Form>
      
    </div>
  )
}