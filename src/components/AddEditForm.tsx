import React, {useEffect, useMemo} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {addUserSchema, AddUserType} from '../schemas';
import {theme} from '../theme';

/* components */
import InputField from './common/InputField';
import Button from './common/Button';

export type CurrentUser = {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
};

type PropsEditForm = {
  currentUser: CurrentUser;
  isEdit: boolean;
  callBack: (data: CurrentUser) => void;
};

export default function AddEditForm({
  currentUser,
  isEdit = false,
  callBack = async () => {},
}: PropsEditForm): JSX.Element {
  const {goBack} = useNavigation();

  const defaultValues = useMemo(
    () => ({
      id: currentUser?.id || 0,
      username: currentUser?.username || '',
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phone: currentUser?.phone || '',
    }),
    [currentUser],
  );
  const methods = useForm<AddUserType>({
    resolver: zodResolver(addUserSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset: resetForm,
    formState: {isSubmitting},
  } = methods;

  useEffect(() => {
    if (isEdit && currentUser) {
      resetForm(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async (data: CurrentUser) => {
    const response = await callBack(data);
    if (response) {
      Alert.alert(response[0].message);
    } else {
      if (!isEdit) {
        resetForm();
      }
      goBack();
    }
  };

  const titleBtn = !isEdit ? 'Save' : 'Update';

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.inner}>
            <InputField topError label="Name" name="name" />
          </View>
          <View style={styles.inner}>
            <InputField topError label="Username" name="username" />
          </View>
          <View style={styles.inner}>
            <InputField
              topError
              label="Cellphone"
              name="phone"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inner}>
            <InputField
              editable={!isEdit}
              notEdit={isEdit}
              topError
              label="Email"
              name="email"
              keyboardType="email-address"
            />
          </View>
          <Button
            disabled={isSubmitting}
            onPress={handleSubmit(onSubmit)}
            title={isSubmitting ? 'Loading' : titleBtn}
          />
        </ScrollView>
      </FormProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  inner: {
    backgroundColor: theme.colors.whitePure,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  space: {
    marginBottom: 20,
  },
});
