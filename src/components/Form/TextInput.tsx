import { TextInput } from 'react-native'

export interface InputProps {
    placeholder: string
    onBlur(...event: any[]): void
    onChangeText(...event: any[]): void
    value: string
    secureTextEntry: boolean
}


export default function Input(props: InputProps) {
    const { secureTextEntry, onBlur, onChangeText, placeholder, value } = props
    return (
        <TextInput
            className='w-3/4 border mr-auto ml-auto h-10 mb-2 p-2'
            onBlur={onBlur}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
        />
    )
}