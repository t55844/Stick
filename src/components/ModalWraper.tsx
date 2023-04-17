import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

const ModalWrapper = ({ isVisible, closeModal, children }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={closeModal}>
            <View className={` rounded-lg w-full bg-primary-100`}>
                {children}
            </View>
        </Modal>
    );
};

export default ModalWrapper;