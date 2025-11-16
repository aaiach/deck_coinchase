import React from 'react'
import Slide from './Slide'
import ContentBlock from '../molecules/ContentBlock'
import { 
  UserIcon, 
  CpuChipIcon, 
  UserPlusIcon, 
  ShoppingBagIcon,
  CheckCircleIcon,
  ServerIcon
} from '@heroicons/react/24/outline'
import './OrderFlowSlide.css'

const OrderFlowSlide: React.FC = () => {
  return (
    <Slide layout="single">
      <ContentBlock
        overline="ORDER FLOW"
        heading="Step 1: Agentic Payment"
        subheading="AI agents autonomously execute purchases on behalf of users."
      />
      
      <div className="order-flow">
        <div className="order-flow__step">
          <div className="order-flow__icon">
            <UserIcon />
          </div>
          <div className="order-flow__content">
            <div className="order-flow__label">Step 1</div>
            <div className="order-flow__text">User orders item online</div>
          </div>
        </div>

        <div className="order-flow__arrow">↓</div>

        <div className="order-flow__step">
          <div className="order-flow__icon">
            <CpuChipIcon />
          </div>
          <div className="order-flow__content">
            <div className="order-flow__label">Step 2</div>
            <div className="order-flow__text">LLM sends order to payment agent</div>
          </div>
        </div>

        <div className="order-flow__arrow">↓</div>

        <div className="order-flow__step-with-branch">
          <div className="order-flow__step">
            <div className="order-flow__icon">
              <UserPlusIcon />
            </div>
            <div className="order-flow__content">
              <div className="order-flow__label">Step 3</div>
              <div className="order-flow__text">Payment agent debits user wallet</div>
            </div>
          </div>

          <div className="order-flow__branch">
            <div className="order-flow__branch-arrow">↕</div>
            <div className="order-flow__branch-item">
              <div className="order-flow__icon order-flow__icon--small">
                <ServerIcon />
              </div>
              <div className="order-flow__branch-text">Coinbase x402 gateway</div>
            </div>
          </div>
        </div>

        <div className="order-flow__arrow">↓</div>

        <div className="order-flow__step">
          <div className="order-flow__icon">
            <ShoppingBagIcon />
          </div>
          <div className="order-flow__content">
            <div className="order-flow__label">Step 4</div>
            <div className="order-flow__text">Payment agent places the order</div>
          </div>
        </div>

        <div className="order-flow__arrow">↓</div>

        <div className="order-flow__step order-flow__step--complete">
          <div className="order-flow__icon">
            <CheckCircleIcon />
          </div>
          <div className="order-flow__content">
            <div className="order-flow__label">Complete</div>
            <div className="order-flow__text">Order completed</div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default OrderFlowSlide

