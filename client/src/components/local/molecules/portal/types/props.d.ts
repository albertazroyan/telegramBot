import React  from 'react'

interface PropTypes {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean
    title: string
}

export default PropTypes