
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '../../public/img/logo.png'

const LogoBox = styled.span`
    font-weight:bold;
    font-size:18px;
    display:inline-flex;
    align-items:center;
    height:30px;
    line:height:20px;
    padding:10px;
    transition:600ms ease;
    &:hover{
        transform:translateX(7px)
    }
`

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <LogoBox>
                    <Image
                    src={LogoImage} 
                    alt={'WindBnb'}
                    />
                </LogoBox>
            </a>
        </Link>

    )
}

export default Logo