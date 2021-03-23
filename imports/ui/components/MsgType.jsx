import React from 'react';
import { Badge } from 'reactstrap';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

export const MsgType = (props) => {
    switch (props.type){
    // bank
    case "cosmos-sdk/MsgSend":
        return <Badge color="success"><T>messageTypes.send</T></Badge>
    case "cosmos-sdk/MsgMultiSend":
        return <Badge color="success"><T>messageTypes.multiSend</T></Badge>
    
    // bep3
    case "bep3/MsgClaimAtomicSwap":
        return <Badge color="primary"><T>messageTypes.claimAtomicSwap</T></Badge>
    case "bep3/MsgCreateAtomicSwap":
        return <Badge color="primary"><T>messageTypes.CreateAtomicSwap</T></Badge>

    // cdp
    case "cdp/MsgDeposit":
        return <Badge style={{ backgroundColor: "#FF9800" }}><T>messageTypes.depositCDP</T></Badge>
    case "cdp/MsgCreateCDP":
        return <Badge style={{ backgroundColor: "#FF9800" }}><T>messageTypes.createCDP</T></Badge>
    case "cdp/MsgWithdraw":
        return <Badge style={{ backgroundColor: "#FF9800" }}><T>messageTypes.withdrawCDP</T></Badge>
    case "cdp/MsgDrawDebt":
        return <Badge style={{ backgroundColor: "#FF9800" }}><T>messageTypes.drawDebt</T></Badge>
    case "cdp/MsgRepayDebt":
        return <Badge style={{ backgroundColor: "#FF9800" }}><T>messageTypes.repayDebt</T></Badge>
    case "cdp/MsgLiquidate":
        return <Badge style={{ backgroundColor: "#FF9800" }}><T>messageTypes.liquidate</T></Badge>
    
    // hard 
    case "hard/MsgDeposit":
        return <Badge color="info"><T>messageTypes.depositHARD</T></Badge>
    case "hard/MsgWithdraw":
        return <Badge color="info"><T>messageTypes.withdrawHARD</T></Badge>
    case "hard/MsgBorrow":
        return <Badge color="info"><T>messageTypes.borrowHARD</T></Badge>
    case "hard/MsgLiquidate":
        return <Badge color="info"><T>messageTypes.liquidateHARD</T></Badge>
    case "hard/MsgRepay":
        return <Badge color="info"><T>messageTypes.repayHARD</T></Badge>
   
    // incentive
    case "incentive/MsgClaimUSDXMintingReward":
        return <Badge style={{ backgroundColor: "#01b49e" }}><T>messageTypes.claimIncentive</T></Badge>
    case "incentive/MsgClaimHardLiquidityProivderReward":
        return <Badge style={{ backgroundColor: "#01b49e" }}><T>messageTypes.claimIncentive</T></Badge>
    case "incentive/MsgClaimHardReward":
        return <Badge style={{ backgroundColor: "#01b49e" }}><T>messageTypes.claimIncentive</T></Badge>
        
    // auctions
    case "auction/MsgPlaceBid":
        return <Badge style={{ backgroundColor: "#cd0c53" }}><T>messageTypes.placeBid</T></Badge>
    
    // pricefeed
    case "pricefeed/MsgPostPrice":
        return <Badge style={{ backgroundColor: "#779DBB"}}><T>messageTypes.postPrice</T></Badge>

    // staking
    case "cosmos-sdk/MsgCreateValidator":
        return <Badge color="warning"><T>messageTypes.createValidator</T></Badge>;
    case "cosmos-sdk/MsgEditValidator":
        return <Badge color="warning"><T>messageTypes.editValidator</T></Badge>;
    case "cosmos-sdk/MsgDelegate":
        return <Badge color="warning"><T>messageTypes.delegate</T></Badge>;
    case "cosmos-sdk/MsgUndelegate":
        return <Badge color="warning"><T>messageTypes.undelegate</T></Badge>;
    case "cosmos-sdk/MsgBeginRedelegate":
        return <Badge color="warning"><T>messageTypes.redelegate</T></Badge>;
        
    // gov
    case "cosmos-sdk/MsgSubmitProposal":
        return <Badge color="info"><T>messageTypes.submitProposal</T></Badge>
    case "cosmos-sdk/MsgDeposit":
        return <Badge color="info"><T>messageTypes.deposit</T></Badge>
    case "cosmos-sdk/MsgVote":
        return <Badge color="info"><T>messageTypes.vote</T></Badge>;
        
    // distribution
    case "cosmos-sdk/MsgWithdrawValidatorCommission":
        return <Badge color="secondary"><T>messageTypes.withdrawComission</T></Badge>;
    case "cosmos-sdk/MsgWithdrawDelegationReward":
        return <Badge color="secondary"><T>messageTypes.withdrawReward</T></Badge>;
    case "cosmos-sdk/MsgModifyWithdrawAddress":
        return <Badge color="secondary"><T>messageTypes.modifyWithdrawAddress</T></Badge>;

    // slashing
    case "cosmos-sdk/MsgUnjail":
        return <Badge color="danger"><T>messageTypes.unjail</T></Badge>;
        
    // ibc
    case "cosmos-sdk/IBCTransferMsg":
        return <Badge color="dark"><T>messageTypes.IBCTransfer</T></Badge>;
    case "cosmos-sdk/IBCReceiveMsg":
        return <Badge color="dark"><T>messageTypes.IBCReceive</T></Badge>;

    default:
        return <Badge color="primary">{props.type}</Badge>;
    }
}
