import React from 'react';

import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

const data = {
    id: '1',
    text: "mensagem de teste",
    user: {
        name: 'Anderson',
        avatar_url: 'https://github.com/andersonrr.png',
    }
}

export function MessageList() {
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={data} />
            <Message data={data} />
            <Message data={data} />
        </ScrollView>
    );
}