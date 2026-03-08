import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

type CameraRigProps = {
  isOverlayOpen: boolean
}

export default function CameraRig({ isOverlayOpen }: CameraRigProps) {
  const { camera, gl } = useThree()

  const yawRef = useRef(0)
  const pitchRef = useRef(0)

  const isDraggingRef = useRef(false)
  const dragMovedRef = useRef(false)

  const lastPointerXRef = useRef(0)
  const lastPointerYRef = useRef(0)

  const fixedPosition: [number, number, number] = [0, 1.6, 5]

  useEffect(() => {
    camera.position.set(...fixedPosition)
    camera.rotation.order = 'YXZ'
  }, [camera])

  useEffect(() => {
    const canvas = gl.domElement

    const maxPitch = Math.PI / 3
    const sensitivity = 0.003
    const dragThreshold = 4

    function handlePointerDown(event: PointerEvent) {
      if (isOverlayOpen) return

      isDraggingRef.current = true
      dragMovedRef.current = false
      lastPointerXRef.current = event.clientX
      lastPointerYRef.current = event.clientY

      canvas.setPointerCapture?.(event.pointerId)
    }

    function handlePointerMove(event: PointerEvent) {
      if (!isDraggingRef.current || isOverlayOpen) return

      const deltaX = event.clientX - lastPointerXRef.current
      const deltaY = event.clientY - lastPointerYRef.current

      if (
        Math.abs(deltaX) > dragThreshold ||
        Math.abs(deltaY) > dragThreshold
      ) {
        dragMovedRef.current = true
      }

      yawRef.current += deltaX * sensitivity
      pitchRef.current += deltaY * sensitivity

      if (pitchRef.current > maxPitch) pitchRef.current = maxPitch
      if (pitchRef.current < -maxPitch) pitchRef.current = -maxPitch

      lastPointerXRef.current = event.clientX
      lastPointerYRef.current = event.clientY
    }

    function stopDragging(event?: PointerEvent) {
      if (event) {
        canvas.releasePointerCapture?.(event.pointerId)
      }
      isDraggingRef.current = false
    }

    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerup', stopDragging)
    canvas.addEventListener('pointerleave', stopDragging)
    canvas.addEventListener('pointercancel', stopDragging)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerup', stopDragging)
      canvas.removeEventListener('pointerleave', stopDragging)
      canvas.removeEventListener('pointercancel', stopDragging)
    }
  }, [gl, isOverlayOpen])

  useFrame(() => {
    camera.position.set(...fixedPosition)
    camera.rotation.y = yawRef.current
    camera.rotation.x = pitchRef.current
    camera.rotation.z = 0
  })

  return null
}