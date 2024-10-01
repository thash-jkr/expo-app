import { View, Text } from 'react-native'
import React from 'react'
import profileStyles from '../styles/profile'

const EditProfileModal = () => {
  return (
    <View>
      <Text>EditProfileModal</Text>
      {/* <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={profileStyles.modalContainer}>
          <View style={profileStyles.modalContent}>
            <Text style={profileStyles.modalTitle}>Edit Profile</Text>
            <CustomButton
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal> */}
    </View>
  )
}

export default EditProfileModal