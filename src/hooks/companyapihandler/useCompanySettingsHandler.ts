"use client"

import { useState, useCallback } from 'react'
import { api } from '@/src/lib/api'

interface CompanySettingsData {
    theme?: string
    themeColor?: string
}

interface UseCompanySettingsHandlerReturn {
    // Settings
    settings: any
    loading: boolean
    error: string | null
    getSettings: () => Promise<any>
    updateSettings: (data: CompanySettingsData) => Promise<any>

    // Password
    changePasswordLoading: boolean
    changePasswordError: string | null
    changePassword: (currentPassword: string, newPassword: string, confirmPassword: string) => Promise<void>

    // Utilities
    clearError: () => void
}

export const useCompanySettingsHandler = (): UseCompanySettingsHandlerReturn => {
    // Settings states
    const [settings, setSettings] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Password states
    const [changePasswordLoading, setChangePasswordLoading] = useState(false)
    const [changePasswordError, setChangePasswordError] = useState<string | null>(null)

    const clearError = useCallback(() => {
        setError(null)
        setChangePasswordError(null)
    }, [])

    // Settings functions
    const getSettings = useCallback(async (): Promise<any> => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.get('/company/settings')
            setSettings(response.data.data)
            return response.data.data
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || 'Failed to get settings'
            setError(errorMessage)
            throw new Error(errorMessage)
        } finally {
            setLoading(false)
        }
    }, [])

    const updateSettings = useCallback(async (data: CompanySettingsData): Promise<any> => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.put('/company/settings', data)
            setSettings(response.data.data)
            return response.data.data
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || 'Failed to update settings'
            setError(errorMessage)
            throw new Error(errorMessage)
        } finally {
            setLoading(false)
        }
    }, [])

    // Password function
    const changePassword = useCallback(async (
        currentPassword: string,
        newPassword: string,
        confirmPassword: string
    ): Promise<void> => {
        setChangePasswordLoading(true)
        setChangePasswordError(null)
        try {
            await api.put('/company/password', {
                currentPassword,
                newPassword,
                confirmPassword
            })
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || err.message || 'Failed to change password'
            setChangePasswordError(errorMessage)
            throw new Error(errorMessage)
        } finally {
            setChangePasswordLoading(false)
        }
    }, [])

    return {
        // Settings
        settings,
        loading,
        error,
        getSettings,
        updateSettings,

        // Password
        changePasswordLoading,
        changePasswordError,
        changePassword,

        // Utilities
        clearError
    }
}
