import React, { useState } from 'react';
import { Button } from 'react-native';

import InternetLostModalComponent from '../../../src/components/InternetLostModal/InternetLostModal';

function InternetLostModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button title="toggleModal" onPress={() => setIsModalOpen(!isModalOpen)} />
      <InternetLostModalComponent isModalOpen={isModalOpen} />
    </>
  );
}

export default InternetLostModal;
