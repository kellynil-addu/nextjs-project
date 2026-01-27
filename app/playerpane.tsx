import IconButton from '@/components/iconbutton';
import PanelSection from '@/components/panelsection';
import { Play, SkipBack, SkipForward } from 'lucide-react';


export default function PlayerPane() {
    return (
        <div className="bg-zinc-100 border-t border-t-slate-400 h-16 text-zinc-900 flex-none flex items-stretch">
            <PanelSection padding={12}>
                <IconButton><Play/></IconButton>
                <IconButton><SkipBack/></IconButton>
                <IconButton><SkipForward/></IconButton>
            </PanelSection>
        </div>
    )
}