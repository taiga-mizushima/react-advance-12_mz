import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
    id: number;
    users: Array<User>
    onOpen: () => void; 
}

// 選択したユーザー情報を特定市モーダルを表示するカスタムフック
export const useSelectUser = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const onSelectUser = useCallback((props :Props) => {
        const { id, users, onOpen } = props;
        const targetUser = users.find((user) => user.id === id)
        setSelectedUser(targetUser!);
        onOpen();
    }, [])
    
    return { onSelectUser, selectedUser }
}