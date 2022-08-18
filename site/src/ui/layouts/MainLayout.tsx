import { Layout, Menu, MenuProps, PieChartOutlined, UserOutlined } from 'asimov-react-components'
import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Scrollbars } from 'react-custom-scrollbars'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function menuItem(label: string, url: string, icon?: React.ReactNode): MenuItem {
    return { key: url, icon, label: <Link href={url}>{label}</Link> } as MenuItem
}

function menuGroup(label: string, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return { key, icon, children, label, type: 'group' } as MenuItem
}

export const MainLayout = (props) => {
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false)
    const menuItems: MenuItem[] = [
        menuItem('Overview', '/', <PieChartOutlined />),
        menuGroup('General', 'general', <UserOutlined />, [
            menuItem('Buttons', '/general/buttons'),
            menuItem('Typography', '/general/typography'),
        ]),
    ]

    const getOpenKeys = (items) => {
        let openKeys = []
        items.forEach(item => {
            if (item.key === router.pathname) {
                openKeys.push(item.key)
            } else if (item.children) {
                const childKeys = getOpenKeys(item.children)
                if (childKeys.length > 0) {
                    openKeys.push(...childKeys)
                    openKeys.push(item.key)
                }
            }
        })
        return openKeys
    }

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = { backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 'inherit' }
        return <div style={{ ...style, ...thumbStyle }}{...props}/>
    }

    return <>
        <Container>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={value => setCollapsed(value)}
                collapsedWidth={0}
                zeroWidthTriggerStyle={{ top: 10, backgroundColor: '#fff', color: '#001529' }}
            >
                <Scrollbars
                    style={{ height: '100vh' }}
                    universal
                    renderThumbHorizontal={renderThumb}
                    renderThumbVertical={renderThumb}
                >
                    <Logo />
                    <_Menu
                        theme="dark"
                        mode="inline"
                        openKeys={getOpenKeys(menuItems)}
                        selectedKeys={[router.pathname]}
                        items={menuItems}
                        multiple
                    />
                </Scrollbars>
            </Sider>
            <Layout>
                <_Header />
                <MainContent>
                    {props.children}
                </MainContent>
            </Layout>
        </Container>
    </>
}

const Container = styled(Layout)`
  min-height: 100vh;
`

const Logo = styled.div`
  background-color: red;
  height: 50px;
`

const _Menu = styled(Menu)`
  .ant-menu-item-group-title {
    font-size: 13px;
    text-transform: uppercase;
  }
`

const _Header = styled(Header)`
  background-color: #fff;
  padding: 0;
`

const MainContent = styled(Content)`
  margin: 16px;
  position: relative;
`
