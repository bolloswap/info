import React, { useMemo } from 'react'
import styled from 'styled-components'
import Panel from '../Panel'
import { AutoColumn } from '../Column'
import { RowFixed } from '../Row'
import { TYPE } from '../../Theme'
import { usePairData } from '../../contexts/PairData'
import { formattedNum } from '../../utils'

const PriceCard = styled(Panel)`
  position: absolute;
  right: -220px;
  width: 220px;
  top: -20px;
  z-index: 9999;
  height: fit-content;
  background-color: ${({ theme }) => theme.bg1};
`

function formatPercent(rawPercent) {
  if (rawPercent < 0.01) {
    return '<1%'
  } else return parseFloat(rawPercent * 100).toFixed(0) + '%'
}

export default function UniPrice() {
  const daiPair = usePairData('0xf3010261b58b2874639ca2e860e9005e3be5de0b')
  const busdPair = usePairData('0x1ebf0ee99971c6269062c3b480e8e23b7a74756b')
  const usdtPair = usePairData('0x12e048d01535e2b49675d22078f64fd2307d8a0c')

  const totalLiquidity = useMemo(() => {
    return daiPair && busdPair && usdtPair
      ? daiPair.trackedReserveUSD + busdPair.trackedReserveUSD + usdtPair.trackedReserveUSD
      : 0
  }, [daiPair, busdPair, usdtPair])

  const daiPerBnb = daiPair ? parseFloat(daiPair.token0Price).toFixed(2) : '-'
  const busdPerBnb = busdPair ? parseFloat(busdPair.token1Price).toFixed(2) : '-'
  const usdtPerBnb = usdtPair ? parseFloat(usdtPair.token0Price).toFixed(2) : '-'

  return (
    <PriceCard>
      <AutoColumn gap="10px">
        <RowFixed>
          <TYPE.main>DAI/BNB: {formattedNum(daiPerBnb, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {daiPair && totalLiquidity ? formatPercent(daiPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>BUSD/BNB: {formattedNum(busdPerBnb, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {busdPair && totalLiquidity ? formatPercent(busdPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
        <RowFixed>
          <TYPE.main>USDT/BNB: {formattedNum(usdtPerBnb, true)}</TYPE.main>
          <TYPE.light style={{ marginLeft: '10px' }}>
            {usdtPair && totalLiquidity ? formatPercent(usdtPair.trackedReserveUSD / totalLiquidity) : '-'}
          </TYPE.light>
        </RowFixed>
      </AutoColumn>
    </PriceCard>
  )
}
