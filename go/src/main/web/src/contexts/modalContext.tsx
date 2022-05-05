import React, { createContext, useState } from 'react';

interface IState {
    isOpen: boolean;
}

interface IAction {
    setIsOpen: (prev: boolean) => void;
}

interface IContext {
    state: IState;
    action: IAction;
}

const ModalContext: React.Context<IContext> = createContext<IContext>({
    state: { isOpen: false },
    action: {
        setIsOpen: (prev: boolean) => {},
    },
});

const ModalContextProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const value = {
        state: { isOpen },
        action: { setIsOpen },
    };
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

const { Consumer: ModalContextConsumer } = ModalContext;
export { ModalContextProvider, ModalContextConsumer };
export default ModalContext;
