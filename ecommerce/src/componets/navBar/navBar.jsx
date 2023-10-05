import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import CartWidget from '../cartWidget/cartWidget';
const items = [
    {
        label: '1st menu item',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];
const NavBar = () => {
    return (
        <div>
            <p>Primer Ecommerce</p>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hover me, Click menu item
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <CartWidget/>
        </div>
    )
}

export default NavBar