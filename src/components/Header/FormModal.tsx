import React, { useState } from 'react'
import { Button , Modal, ModalHeader, ModalBody} from 'reactstrap'

interface Props {
    name :string
}

export default function ModalForm ({name } : Props){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Button color="custom-primary" size="sm" onClick={handleOpen} className="mr-2">
            {name}
        </Button>
        <Modal toggle={handleOpen} isOpen={isOpen}>
        <ModalHeader toggle={handleOpen}>{name}</ModalHeader>
            <ModalBody>
                {name}
            </ModalBody>
        </Modal>
        </>
    )
}
