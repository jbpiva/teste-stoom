import styled, { css } from 'styled-components';

interface PropsBoxPizza {
    isActive: Boolean;
}

export const BoxPizza = styled.div<PropsBoxPizza>`
            background: #e8e7ef;
            width: min(400px, 100%);
            border-radius: 10px;
            padding: 20px;
            margin: 10px auto;
            ${props => props.isActive && css`
              filter: grayscale(1)
              `
    }
`