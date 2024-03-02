import { useEffect, useState } from 'react';
import { Character } from '../../../types/api';
import { ModalOverlay, ModalContainer, ModalCloseButton, ModalBody, Wrapper, ModalContent } from './styles';

const Modal = ({ onClose, selectedCharacter }: { onClose: () => void; selectedCharacter: Character }) => {
  const { name, gender, species, type, status, origin, location } = selectedCharacter;

  const [currentIndex, setCurrentIndex] = useState(0);

  const fields = [
    { label: 'Name', value: name },
    { label: 'Gender', value: gender },
    { label: 'Species', value: species },
    { label: 'Type', value: type !== '' ? type : '-' },
    { label: 'Status', value: status },
    { label: 'Origin', value: origin.name },
    { label: 'Location', value: location.name },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === fields.length - 1) {
          clearInterval(interval);
        }
        return prevIndex + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [fields.length]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalBody>
          {fields.slice(0, currentIndex + 1).map((field) => (
            <ModalContent key={field.label}>
              <strong>{field.label}: </strong>
              <Wrapper>{field.value}</Wrapper>
            </ModalContent>
          ))}
        </ModalBody>
        <ModalCloseButton onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="m251.333-204.667-46.666-46.666L433.334-480 204.667-708.667l46.666-46.666L480-526.666l228.667-228.667 46.666 46.666L526.666-480l228.667 228.667-46.666 46.666L480-433.334 251.333-204.667Z" />
          </svg>
        </ModalCloseButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
