import React from 'react'
import Slide from './Slide'
import ContentBlock from '../molecules/ContentBlock'
import { 
  UserIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  TruckIcon,
  ScaleIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline'
import './DisputeFlowSlide.css'

const DisputeFlowSlide: React.FC = () => {
  return (
    <Slide layout="single">
      <ContentBlock
        overline="DISPUTE FLOW"
        heading="Step 2: Dispute Management"
        subheading="CoinChase investigates and arbitrates disputes autonomously."
      />
      
      <div className="dispute-flow">
        {/* Start */}
        <div className="dispute-flow__step">
          <div className="dispute-flow__icon">
            <UserIcon />
          </div>
          <div className="dispute-flow__text">User requests chargeback</div>
        </div>

        <div className="dispute-flow__arrow">→</div>

        {/* CoinChase receives */}
        <div className="dispute-flow__step dispute-flow__step--coinchase">
          <div className="dispute-flow__icon">
            <ShieldCheckIcon />
          </div>
          <div className="dispute-flow__text">CoinChase receives dispute</div>
        </div>

        <div className="dispute-flow__arrow">→</div>

        {/* Investigation section */}
        <div className="dispute-flow__investigation">
          <div className="dispute-flow__investigate-label">Investigate</div>
          
          <div className="dispute-flow__sources">
            <div className="dispute-flow__source">
              <div className="dispute-flow__icon dispute-flow__icon--small">
                <CpuChipIcon />
              </div>
              <div className="dispute-flow__text dispute-flow__text--small">Payment Agent</div>
            </div>

            <div className="dispute-flow__source">
              <div className="dispute-flow__icon dispute-flow__icon--small">
                <TruckIcon />
              </div>
              <div className="dispute-flow__text dispute-flow__text--small">Delivery Service</div>
            </div>
          </div>
        </div>

        <div className="dispute-flow__arrow">→</div>

        {/* Decision */}
        <div className="dispute-flow__step">
          <div className="dispute-flow__icon">
            <ScaleIcon />
          </div>
          <div className="dispute-flow__text">Decision</div>
        </div>

        <div className="dispute-flow__arrow">→</div>

        {/* Outcomes */}
        <div className="dispute-flow__outcomes">
          <div className="dispute-flow__outcome dispute-flow__outcome--approved">
            <div className="dispute-flow__icon dispute-flow__icon--small">
              <CheckCircleIcon />
            </div>
            <div className="dispute-flow__text dispute-flow__text--small">Refund from escrow wallet with Lotus</div>
          </div>

          <div className="dispute-flow__outcome dispute-flow__outcome--denied">
            <div className="dispute-flow__icon dispute-flow__icon--small">
              <XCircleIcon />
            </div>
            <div className="dispute-flow__text dispute-flow__text--small">No refund</div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default DisputeFlowSlide

