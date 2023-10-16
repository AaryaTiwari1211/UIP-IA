
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Timeliner = ({ text }) => {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot sx={{
                    backgroundColor:'red'
                }} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{
                color: 'white'
            }}>
                {text}
            </TimelineContent>
        </TimelineItem>
    )
}

const TimelineComp = () => {
    return (
        <Timeline sx={{
            marginTop:'90px'
        }}>
            <Timeliner text="Ceasefire plans stall as Israel intensifies strikes on Gaza"/>
            <Timeliner text="Senate leader Schumer says chamber will rush through military aid to Israel"/>
            <Timeliner text="US boosts Middle East firepower in case Israel-Hamas war spreads"/>
            <Timeliner text="Global markets cautious over Israel-Hamas escalation fears"/>
            <Timeliner text="Trump's legal troubles keep fueling surges in fundraising"/>
            <Timeliner text="Images from 600 days of fighting in Ukraine after Russia launched an all-out invasion by land, air and sea, the biggest attack by one state against another in Europe since World War Two."/>
        </Timeline>
    )
}

export default TimelineComp